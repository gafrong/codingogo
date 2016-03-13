/*
This Factory is in charge of tracking user status via the **User** `getStatus`
API call and expose it to controllers who require it.
It acts as a simple caching layer between user status and controllers
Whenever one or more controller on the same page are in need to know
the user status the API call would be effectively done only one time
*/
app.factory('userStatus', ['$http','$stamplay', '$rootScope',function ($http, $stamplay, $rootScope) {

  var user = {};

  return {
    loginUser: function (data) {
      return Stamplay.User.login(data);
    },
    registerUser: function (data) {
      return Stamplay.User.signup(data);
    },
    logout: function(){
      return Stamplay.User.logout()
    },
    getUserModel: function () {
      var user = {};

      Stamplay.User.currentUser().then(function(res){
        user = res.user;
console.log(user);
        // if(user.verificationCode){
console.log("user.get('stripeCustomerId')");
console.log(user);


          if(!user.get('stripeCustomerId')){
        console.log("stripeCustomerId"); console.log(user._id);
        console.log("Stamplay.Stripe"); console.log(Stamplay.Stripe);

            Stamplay.Stripe.createCustomer(err, user.id)
            .then(function(sResponse){
        console.log("sResponse");

              var saveUser = Stamplay.User().Model;
              user.set('stripeCustomerId', sResponse.customer_id);
              user.set('subscriptions', sResponse.subscriptions);
              saveUser.set('stripeCustomerId', user.get('stripeCustomerId'));
              saveUser.set('subscriptions', user.get('subscriptions'));
              saveUser.set('_id', user.get('_id'));
              saveUser.save()
              .then(function(){

              })
            })
          }

        // }
        console.log(user);
        console.table(Stamplay.Stripe);
        console.log(Stripe.createCustomer());
        console.log(Stripe.Stripe);

      })
      return Stamplay.User;
    },
    // Getter and Setter method
    getUser: function () {
      return user
    },
    setUser: function (displayName, picture, _id, email, logged) {
      user = {
        displayName: displayName,
        picture: picture,
        _id: _id,
        email: email,
        logged: logged
      }
    },

    // Subscription Section
    createCard: function(cardObj){
      // Collect credit card information and store it via Stripe
    },
    subscribe: function(planId){
      // Subscribe user
    },
    unsubscribe: function(planId){
      // Cancel user subscription
    }
  };
}])