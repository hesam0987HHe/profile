
var skills = {
    ht: 95,
    jq: 70,
    sk: 30,
    ph: 75,
    il: 20,
    in: 60,
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $("." + key);
  
    skillbar.animate(
      {
        width: value + "%"
      },
      3000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  });