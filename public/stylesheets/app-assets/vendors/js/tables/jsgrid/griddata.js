(function() {

    var db = {

        loadData: function(filter) {
         return $.ajax({
                    type: "GET",
                    url: "/data",
                    success:function(){
                        console.log('done')
                    }
                });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

}());