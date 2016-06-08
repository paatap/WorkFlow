isc.DynamicForm.create({
    ID: "crmMainSearchForm",
    numCols: 8,
    fields: [
    	{name: "sessionID", title: "Session ID", type: "text"},
        {name: "customerPhone", title: "Phone", type: "text",
    		mask: "(###) ###-######", hint: "(###) ###-######", showHintInField: true},
    	{name: "personalNumber", title: "P_Number", type: "text",
        		mask:  "###########", hint: "###########", showHintInField: true},
    		            
    		
        {name: "customerName", title: "FirstName", type: "text"},
        {name: "policyNumber", title: "PolicyNumber", type: "text"},
        
        { name: "creationDate", title: "Date From", editorType: "DateTimeItem",
            useTextField: true, useMask: true},
          { name: "changeDate", title: "Date To", editorType: "DateTimeItem",
            useTextField: true, useMask: true},
            {
                type:"select",
                title:"Status (PickList)",
                multiple:true,
                multipleAppearance:"picklist",
                valueMap: [ "Current", "Ignored", "Handling", "Compited" ]
            },
            {
                type:"select",
                title:"Infos (PickList)",
                multiple:true,
                multipleAppearance:"picklist",
                valueMap: [ "info N1", "info N2", "info N3", "info N4" ]
            },
            {
                type:"select",
                title:"Problems (PickList)",
                multiple:true,
                multipleAppearance:"picklist",
                valueMap: [ "problem N1", "problem N2", "problem N3", "problem N4" ]
            },
            {
                type:"select",
                title:"Subject (PickList)",
                multiple:true,
                multipleAppearance:"picklist",
                valueMap: [ "ექიმთან ვიზიტი", "ექიმთან/კლინიკასთან ვიზიტი", "კოორპორატიული დაზღვევა"
                            , "საცალო დაზღვევის პროგრამა" ]
            },
            {
                type:"select",
                title:"Products (PickList)",
                multiple:true,
                multipleAppearance:"picklist",
                valueMap: [ "აგროდაზღვევა", "ავტოდაზღვევა", "მწვანე ბარათის დაზღვევა"
                            , "ოპტიმალი"  , "ოპტიმალი ბინადრობისთვის" , "სამოგზაურო დაზღვევა",
                            "საპენსიო დაზღვევა", "სიცოცხლის დაზღვევა" , "სამოგზაურო დაზღვევა"
                            , "ტექნიკის  დაზღვევა" , "ქონების დაზღვევა"  , "ცხოველების დაზღვევა"
                            , "შიდა ტურის დაზღვევა"]
            },
            {
                type:"select",
                title:"Assigned Staff ",
                multiple:true,
                multipleAppearance:"picklist",
                valueMap: [ "ლევან მურუსუძე", "ნიკა გვარამია", "ჯელლი როი მორტონი", "ბრიუს ლიი",
                            "ჩარლზ ჩაპლინი", "ვინი პუჰი" ]
            },
            {name: "searchProceed",
                type: "button",
                title: "Search Proceed",
       		    width:100,
                click: "isc.say('Search Successfull')",
                disabled: false
               },
               {name: "exportProceed",
                   type: "button",
                   title: "Export To CSV",
          		 width:100,
                   click: "isc.say('Data Successfuly Exported')",
                   disabled: false
                  }
    ]
});

