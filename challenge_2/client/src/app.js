var App = {
    init: function() {

        var searchCallback = function(error, data) {
            if (error) {
                console.log('searchCallback error', error);
            } else {
               console.log('searchCallback data', data);
               console.log('rendering new results');
               $("#result-data").replaceWith data);
            }
        }
        
        var formData = () => {
            var text = document.getElementById('textArea').value;
            console.log('form text', text);
            post(text, searchCallback);
        }
        
        var post = (data, callback) => {
            $.ajax({
            url: 'http://localhost:3000/handle-post',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.parse(JSON.stringify(data)),
            processData: false,
            success: function(data){
                callback(null, data);
            },
            error: function(error){
                console.log('Error in App post', data);
                callback(error, null);
            }
            });
        };
    }
};

 