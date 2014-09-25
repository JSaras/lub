Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({
    _id: Session.get("sPlayerId")
  });
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

// getting drop downs to populate properly
Template.tModalPlayer.rendered = function(evt, tmpl) {
    var id = Session.get('sPlayerId');
    var answer = Players.findOne(id);
    console.log( cPlayer );

    
  if (Session.get('sPlayerId')) {

    var cPlayer = Players.findOne({
      _id: Session.get('sPlayerId')
    });
  }
  //$('.game-status').val(cPlayer.gameStatus);
  //tmpl.find('.game-status').value(player.gameStatus);
};

Template.tModalPlayer.events({
  'click .save-changes': function(evt, tmpl) {
    var firstName = $('.first-name').val();
    var gameStatus = $('.game-status').val();
    var fieldPosition = $('.field-position').val();
    var gerseyNumber = $('.gersey-number').val();
    var seasonFeeOwed = $('.season-fee-owed').val();
    var seasonFeePaid = $('.season-fee-paid').val();
    var total = seasonFeeOwed - seasonFeePaid;
    updatePlayer(firstName, gameStatus, fieldPosition, gerseyNumber, seasonFeeOwed, seasonFeePaid, total);
    $("#modal-id").modal("hide");
    Session.set('sPlayerId', null);
    // money(owed, paid);
  }
});

// var money = function(owed, paid) {
//   total = owed - paid;
//   return total;
// }

var updatePlayer = function(firstName, gameStatus, fieldPosition, gerseyNumber, seasonFeeOwed, seasonFeePaid, total) {
  Players.update(Session.get("sPlayerId"), {
    $set: {
      firstName: firstName,
      gameStatus: gameStatus,
      fieldPosition: fieldPosition,
      gerseyNumber: gerseyNumber,
      seasonFeeOwed: seasonFeeOwed,
      seasonFeePaid: seasonFeePaid,
      total: total
    }
  });

  return true;
}

var removeProject = function() {
  Projects.remove({
    _id: Session.get('editing_project')
  });
};
