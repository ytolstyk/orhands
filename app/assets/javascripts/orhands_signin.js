$(function() {
  var $signInBtn = $(".sign-in-btn");
  var $signUpLink = $("#sign-up-link");
  var $signInLink = $("#sign-in-link");
  var $modalLabel = $("#sign-in-label");
  var $username = $("#username");
  var $confirmPassword = $("#confirm-password-field");
  var $confirmPasswordInput = $("#confirm-password");
  var $passwordInput = $("#password");
  var $userNavbar = $(".navbar-user-info");
  var $signInLabel = $("#sign-in-label");
  var $closeModal = $(".close");

  $userNavbar.on("click", "#sign-out", signOut);
  $userNavbar.on("click", "#sign-up-link", signUpForm);
  $userNavbar.on("click", "#sign-in-link", signInForm);
  $signInBtn.on("click", signIn);

  $confirmPasswordInput.on("keyup", passwordMatch);
  $username.on("keyup", passwordMatch);
  $passwordInput.on("keyup", passwordMatch);

  $("#signInModal").on("hidden.bs.modal", function(event) {
    $signInBtn.attr("disabled", false);
  });

  // =========== modal

  function signIn(event) {
    event.preventDefault();
    var path = $(event.currentTarget).attr("path");
    signInAction(path);
  };

  function signInForm() {
    clearSigninForm();

    $confirmPassword.hide();
    $modalLabel.text("Sign In");
    $signInBtn.text("Sign In");
    $signInBtn.attr("disabled", true);
    $signInBtn.attr("path", "api/session");
  };

  function signUpForm() {
    clearSigninForm();

    $confirmPassword.show();
    $modalLabel.text("Sign Up");
    $signInBtn.text("Sign Up");
    $signInBtn.attr("disabled", true);
    $signInBtn.attr("path", "api/users");
  };

  function clearSigninForm() {
    $username.val("");
    $passwordInput.val("");
    $confirmPasswordInput.val("");
  };

  // ============ sign in

  function signInAction(path) {
    var $username = $("#username");
    var $password = $("#password");
    var payload = {
      user: {
        username: $username.val(),
        password: $password.val()
      }
    }

    $.ajax({
      url: path,
      method: "POST",
      dataType: "json",
      data: payload,
      success: handleSignIn,
      error: signInError
    });
  };

  function signInError(data) {
    // display error message

  };

  function handleSignIn(data) {
    if (typeof data.errors === "undefined") {
      $userNavbar.empty();
      var $userLink = $("<li>")
        .append($("<a href='#'>").text(data.username));
      var $signOutLink = $("<li id='sign-out'>")
        .append($("<a href='#'>").text("Sign out"));
      
      $userNavbar.append($userLink).append($signOutLink);
      $closeModal.trigger("click");
    } else {
      signInError(data);
    }
  };

  function passwordMatch() {
    if ($signInLabel.text() === "Sign Up") {
      if ($passwordInput.val() === $confirmPasswordInput.val()
            && $username.val().length > 0
            && $passwordInput.val().length > 5) {
        $signInBtn.attr("disabled", false);
      } else {
        $signInBtn.attr("disabled", true);
      }
    } else {
      if ($passwordInput.val().length > 5 && $username.val().length > 0) {
        $signInBtn.attr("disabled", false);
      } else {
        $signInBtn.attr("disabled", true);
      }
    }
  };

  // =========== sign out

  function signOut() {
    $.ajax({
      url: "api/session",
      method: "DELETE",
      success: handleSignOut,
      error: signOutError
    });
  };

  function handleSignOut(data) {
    $userNavbar.empty();
    var $signInLink = $("<li id='sign-in-link'>")
      .append($("<a href='#' data-toggle='modal' data-target='#signInModal' id='sign-in-link'>").text("Sign in"));
    var $signUpLink = $("<li id='sign-up-link'>")
      .append($("<a href='#' data-toggle='modal' data-target='#signInModal' id='sign-up-link'>").text("Sign up"));
    $userNavbar.append($signInLink).append($signUpLink);
  };

  function signOutError(data) {
    // display error message
  };
});
