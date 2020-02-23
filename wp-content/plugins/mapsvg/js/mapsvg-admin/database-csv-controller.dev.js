(function($, window){
    var MapSVGAdminDatabaseCsvController = function(container, admin, mapsvg){
        this.name = 'database-csv';
        this.database = mapsvg.getDatabaseService();
        MapSVGAdminController.call(this, container, admin, mapsvg);
    };
    window.MapSVGAdminDatabaseCsvController = MapSVGAdminDatabaseCsvController;
    MapSVG.extend(MapSVGAdminDatabaseCsvController, window.MapSVGAdminController);


    MapSVGAdminDatabaseCsvController.prototype.setEventHandlers = function(){
        var _this = this;
        var buffer = [];
        var errors = "Errors: \n";
        this.view.find('#mapsvg-btn-csv-upload').on('click', function(){
            var btn = $(this);
            if($('#mapsvg-csv-file')[0].files[0]){
                Papa.parse($('#mapsvg-csv-file')[0].files[0], {
                    worker: true,
                    header: true,
                    skipEmptyLines: true,
                    step: function(row) {
                        if(row.errors.length === 0){
                            buffer = buffer.concat(row.data);
                            if(buffer.length === 100){
                                _this.import(buffer);
                                buffer = [];
                            }
                        }else{
                            errors += results.errors.map(function(e){ return e.message+(e.row!==undefined? ' (row: '+e.row+')' : ''); }).slice(0,5).join("\n");
                            if(results.errors.length > 5){
                                errors += "\n...and "+(results.errors.length-5)+" more. ";
                            }
                        }
                    },
                    complete: function() {
                        if(errors.length > 20){
                            alert(errors);
                        }
                        // if(results.errors.length === 0){
                        //     _this.import(results.data);
                        // }else{
                        //     var text = "Errors: \n";
                        //     text += results.errors.map(function(e){ return e.message+(e.row!==undefined? ' (row: '+e.row+')' : ''); }).slice(0,5).join("\n");
                        //     if(results.errors.length > 5){
                        //         text += "\n...and "+(results.errors.length-5)+" more. ";
                        //     }
                        //     alert(text);
                        // }
                    }
                });
            } else {
                $.growl.error({title: '', message: 'Please choose a file'});
            }
        });
    };

    MapSVGAdminDatabaseCsvController.prototype.import = function(data){
        var _this = this;

        var btn = $('#mapsvg-btn-csv-upload');
        btn._button('loading');
        var res = _this.database.import(data).done(function(data){
            $.growl.notice({title: '', message: 'File uploaded'});
        }).always(function(){
            btn._button('reset');
        }).fail(function(){
            $.growl.error({title: '', message: 'Server error'});
        });
    };




})(jQuery, window);