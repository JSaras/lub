Template.tRoster.cRoster = function() {
    return Players.find({
        gameStatus: {
            $in: ["starting", "sub"]
        }
    }, {
        sort: {
            firstName: 1
        }
    });
};


Template.tRoster.sPlayerId = function() {
    Session.get("sPlayerId");
};

Template.tRoster.events({
    'click .remove-player': function(evt, tmpl) {
        Session.set('sPlayerId', this._id);
        removePlayer();
        Session.set('sPlayerId', null);
    },
    'click .edit-player': function(evt, tmpl) {
        // need access to session
        Session.set('sPlayerId', this._id);
        $("#modal-id").modal("show")
    }
});

var removePlayer = function() {
    Players.remove({
        _id: Session.get('sPlayerId')
    });
};

Template.tRoster.helpers({
    math: function() {
        owed: {$in: ["seasonFeeOwed"]}
        return owed;
    }
});
