
var skills = {
    ht: 95,
    jq: 95,
    sk: 95,
    ph: 95,
    il: 70,
    in: 65,
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