$(document).ready(function () {

        $.ajax({
            type: "GET",
            url: "/data"
        }).done(function (data) {

            $("#validation").jsGrid({
                width: "100%",
                filtering: true,
                editing: !0,
                inserting: !0,
                sorting: !0,
                paging: !0,
                autoload: !0,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "Do you really want to delete the client?",
                noDataContent: "Not found",
                controller: {
                    loadData: function (filter) {
                        return $.grep(data, function (item) {
                          
                            return (!filter.Location_Code || item.Location_Code===filter.Location_Code)
                            &&        
                (!filter.Property_Size_Ha || item.Property_Size_Ha===filter.Property_Size_Ha)
                            && (!filter.Parish_Code || item.Parish_Code === filter.Parish_Code) 
                               && (!filter.Parish_Extension_Code || item.Parish_Extension_Code === filter.Parish_Extension_Code) 
                               && (!filter.District || item.District.indexOf(filter.District.toUpperCase()) > -1) 
                               && (!filter.Parish || item.Parish.indexOf(filter.Parish.toUpperCase()) > -1) 
                               && (!filter.Parish_Extension_Name || item.Parish_Extension_Name.indexOf(filter.Parish_Extension_Name.toUpperCase()) > -1) 
                               && (!filter.Livestock_Name || item.Livestock_Name.indexOf(filter.Livestock_Name.toUpperCase()) > -1) 
                               && (!filter.Livestock_Type_Code || item.Livestock_Type_Code===filter.Livestock_Type_Code) 
                               && (!filter.Livestock_Group_Name || item.Livestock_Group_Name.indexOf(filter.Livestock_Group_Name.toUpperCase()) > -1) 
                               && (!filter.Livestock_Count_Sum || item.Livestock_Count_Sum===filter.Livestock_Count_Sum) 
                               && (!filter.Farmers || item.Farmers===filter.Farmers)
                        });
                    },
                     insertItem:function(data)
                {
                   

                    let formData={
                        District: data.District,
                        Farmers:data.Farmers,
                        Livestock_Count_Sum:data.Livestock_Count_Sum,
                        Livestock_Group_Code: data.Livestock_Group_Code,
                        Livestock_Group_Name: data.Livestock_Group_Name,
                        Livestock_Name:data.Livestock_Name,
                        Livestock_Type_Code:data.Livestock_Type_Code,
                        Location_Code:data.Location_Code,
                        Parish:data.Parish,
                        Parish_Code:data.Parish_Code,
                        Parish_Extension_Code:data.Parish_Extension_Code,
                        Parish_Extension_Name:data.Parish_Extension_Name
                    }

                    
                    $.ajax({
                        type: "POST",
                        url: "/data",
                        data: JSON.stringify(formData),
                        contentType:"application/json",
                        success: function (response) {
                          console.log(response);
                        }
                    });
                },
                updateItem: function(data) {

                    let formData={
                        _id:data._id,
                        District: data.District,
                        Farmers:data.Farmers,
                        Livestock_Count_Sum:data.Livestock_Count_Sum,
                        Livestock_Group_Code: data.Livestock_Group_Code,
                        Livestock_Group_Name: data.Livestock_Group_Name,
                        Livestock_Name:data.Livestock_Name,
                        Livestock_Type_Code:data.Livestock_Type_Code,
                        Location_Code:data.Location_Code,
                        Parish:data.Parish,
                        Parish_Code:data.Parish_Code,
                        Parish_Extension_Code:data.Parish_Extension_Code,
                        Parish_Extension_Name:data.Parish_Extension_Name
                    }

                    $.ajax({
                        type: "POST",
                        url: "/dataUpdate",
                        data: JSON.stringify(formData),
                        contentType:"application/json",
                        success: function (response) {
                          console.log(response);
                        }
                    }); 
                },
                deleteItem: function(data) {

                    let formData={
                        _id:data._id
                    }

                    $.ajax({
                        type: "POST",
                        url: "/dataDelete",
                        data: JSON.stringify(formData),
                        contentType:"application/json",
                        success: function (response) {
                          console.log(response);
                        }
                    });
                } 
                },
                fields: [{
                    name: "Location_Code",
                    type: "number",
                    width: 150,
                    validate: "required"
                }, {
                    name: "Property_Size_Ha",
                    type: "number",
                    width: 150,
                    validate: "required"
                }, {
                    name: "Parish_Code",
                    type: "number",
                    width: 150,
                    validate: "required"
                }, {
                    name: "Parish_Extension_Code",
                    type: "number",
                    width: 200,
                    validate: "required"
                }, {
                    name: "District",
                    type: "text",
                    width: 150,
                    validate: "required"
                }, {
                    name: "Parish",
                    type: "text",
                    width: 150,
                    validate: "required"
                }, {
                    name: "Parish_Extension_Name",
                    type: "text",
                    width: 200,
                    validate: "required"
                }, {
                    name: "Livestock_Name",
                    type: "text",
                    width: 150,
                    validate: "required"
                }, {
                    name: "Livestock_Type_Code",
                    type: "number",
                    width: 200,
                    validate: "required"
                }, {
                    name: "Livestock_Group_Code",
                    type: "number",
                    width: 200,
                    validate: "required"
                }, {
                    name: "Livestock_Group_Name",
                    type: "text",
                    width: 200,
                    validate: "required"
                }, {
                    name: "Livestock_Count_Sum",
                    type: "number",
                    width: 200,
                    validate: "required"
                }, {
                    name: "Farmers",
                    type: "number",
                    width: 150,
                    validate: "required"
                }, {
                    type: "control"
                }]

            });

        })


        /* $("#validation").jsGrid({
                    width: "100%",
                    filtering: true,
                    editing: !0,
                    inserting: !0,
                    sorting: !0,
                    paging: !0,
                    autoload: !0,
                    pageSize: 15,
                    pageButtonCount: 5,
                    deleteConfirm: "Do you really want to delete the client?",
                    noDataContent: "Not found",
                    controller: {
                       loadData: function (filter) {
                                criteria = filter;
                                var data = $.Deferred();
                                $.ajax({
                                    type: "GET",
                                    url: "/data",
                                    }).done(function(response){
                                        console.log('ok')
                                        var res = [];
                                        console.log(criteria)
                                        if(criteria.District !== "")
                                        {
                                            response.forEach(function(element) {
                                                if(element.District.indexOf(criteria.District) > -1){
                                                    res.push(element);
                                                    response = res;
                                                }
                                            }, this);
                                        }
                                        else res = response;
                                        if(criteria.Livestock_Name!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Livestock_Name.indexOf(criteria.LiveStock) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;
                                        
                                        if(criteria.Location_Code!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Location_Code.indexOf(criteria.Location_Code) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;  

                                        if(criteria.Livestock_Count_Sum!== undefined)
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Livestock_Count_Sum.indexOf(criteria.Livestock_Count_Sum) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;  
                                        if(criteria.Farmers !== undefined)
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Farmers.indexOf(criteria.Farmers) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;    
                                        if(criteria.Livestock_Group_Name!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Livestock_Group_Name.indexOf(criteria.Livestock_Group_Name) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Livestock_Group_Code!== undefined)
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Livestock_Group_Code.indexOf(criteria.Livestock_Group_Code) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Livestock_Type_Code!== undefined)
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Livestock_Type_Code.indexOf(criteria.Livestock_Type_Code) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Livestock_Name!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Livestock_Name.indexOf(criteria.Livestock_Name) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Parish_Extension_Name!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Parish_Extension_Name.indexOf(criteria.Parish_Extension_Name) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Parish!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Parish.indexOf(criteria.Parish) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Parish_Extension_Code!== undefined)
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Parish_Extension_Code.indexOf(criteria.Parish_Extension_Code) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                        if(criteria.Parish_Code!== undefined)
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Parish_Code.indexOf(criteria.Parish_Code) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   
                                       
                                        if(criteria.Property_Size_Ha!== "")
                                        {
                                            res= [];
                                            response.forEach(function(element) {
                                                if(element.Property_Size_Ha.indexOf(criteria.Property_Size_Ha) > -1)
                                                    res.push(element);
                                            }, this);
                                        }
                                        else res = response;   

                                        data.resolve(res);
                                        console.log(res.length)
                                    });
                                   
                                return data.promise();
                            },       
                    },
                    fields: [{
                        name: "Location_Code",
                        type: "number",
                        width: 150,
                        validate: "required"
                    },{
                        name: "Property_Size_Ha",
                        type: "text",
                        width: 150,
                        validate: "required"
                    },{
                        name: "Parish_Code",
                        type: "number",
                        width: 150,
                        validate: "required"
                    },{
                        name: "Parish_Extension_Code",
                        type: "number",
                        width: 200,
                        validate: "required"
                    },{
                        name: "District",
                        type: "text",
                        width: 150,
                        validate: "required"
                    },{
                        name: "Parish",
                        type: "text",
                        width: 150,
                        validate: "required"
                    },{
                        name: "Parish_Extension_Name",
                        type: "text",
                        width: 200,
                        validate: "required"
                    },{
                        name: "Livestock_Name",
                        type: "text",
                        width: 150,
                        validate: "required"
                    },{
                        name: "Livestock_Type_Code",
                        type: "number",
                        width: 200,
                        validate: "required"
                    },{
                        name: "Livestock_Group_Code",
                        type: "number",
                        width: 200,
                        validate: "required"
                    },{
                        name: "Livestock_Group_Name",
                        type: "text",
                        width: 200,
                        validate: "required"
                    },{
                        name: "Livestock_Count_Sum",
                        type: "number",
                        width: 200,
                        validate: "required"
                    },{
                        name: "Farmers",
                        type: "number",
                        width: 150,
                        validate: "required"
                    }, {
                        type: "control"
                    }]
                })
                
         */
    }

);