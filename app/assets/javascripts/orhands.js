window.Orhands = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Orhands.Routers.Orhands({
      $main: $("#main")
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  var $searchBox = $(".search-input");
  var $formSearch = $(".form-search");
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
  $signInBtn.on("click", signIn);
  $signInLink.on("click", signInForm);
  $signUpLink.on("click", signUpForm);

  $confirmPasswordInput.on("keyup", passwordMatch);
  $username.on("keyup", passwordMatch);
  $passwordInput.on("keyup", passwordMatch);

  $searchBox.on("focus", function() {
    $(this).css("width", "300px");
  });

  $searchBox.on("focusout", function() {
    $(this).css("width", "200px");
  });

  $formSearch.searchable({
    results: "#search-results",
    url: "/api/searches"
  });

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
    debugger
  };

  function handleSignIn(data) {
    if (typeof data.errors === "undefined") {
      $userNavbar.empty();
      var $userLink = $("<li>").append($("<a>").text(data.username));
      var $signOutLink = $("<li id='sign-out'>").append($("<a>").text("Sign out"));
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
    var $signInLink = $("<li id='sign-in-link'>").append($("<a>").text("Sign in"));
    var $signUpLink = $("<li id='sign-up-link'>").append($("<a>").text("Sign up"));
    $userNavbar.append($signInLink).append($signUpLink);
  };

  function signOutError(data) {
    // display error message
  };
});
