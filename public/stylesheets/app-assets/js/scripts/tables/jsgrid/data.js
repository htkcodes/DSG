$(document).ready(function () {
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
                                    if(criteria.Livestock_Count_Sum!== "")
                                    {
                                        res= [];
                                        response.forEach(function(element) {
                                            if(element.Livestock_Count_Sum.indexOf(criteria.Livestock_Count_Sum) > -1)
                                                res.push(element);
                                        }, this);
                                    }
                                    else res = response;  
                                    if(criteria.Farmers!== "")
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
                                    if(criteria.Livestock_Group_Code!== "")
                                    {
                                        res= [];
                                        response.forEach(function(element) {
                                            if(element.Livestock_Group_Code.indexOf(criteria.Livestock_Group_Code) > -1)
                                                res.push(element);
                                        }, this);
                                    }
                                    else res = response;   
                                    if(criteria.Livestock_Type_Code!== "")
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
                                    if(criteria.Parish_Extension_Code!== "")
                                    {
                                        res= [];
                                        response.forEach(function(element) {
                                            if(element.Parish_Extension_Code.indexOf(criteria.Parish_Extension_Code) > -1)
                                                res.push(element);
                                        }, this);
                                    }
                                    else res = response;   
                                    if(criteria.Parish_Code!== "")
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
            
     
        }
    
    );