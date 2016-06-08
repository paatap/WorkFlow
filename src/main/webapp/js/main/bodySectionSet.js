
isc.defineClass("HelpCanvas", "Canvas").addProperties({
    autoDraw: false,
    padding: 10,
    overflow:"auto",
    contents: "<b>Severity 1</b> - Critical problem<br>System is unavailable in production or " +
              "is corrupting data, and the error severely impacts the user's operations." +
              "<br><br><b>Severity 2</b> - Major problem<br>An important function of the system " +
              "is not available in production, and the user's operations are restricted." +
              "<br><br><b>Severity 3</b> - Minor problem<br>Inability to use a function of the " +
              "system occurs, but it does not seriously affect the user's operations."

});

isc.SectionStack.create({
    ID: "bodySectionSet",
    visibilityMode: "multiple",
    width: "100%", height: "30%",
    border:"1px solid blue",
    sections: [
        {title: "Search", expanded: true, resizeable:true,canCollapse: true, items: [ SearchTabSet
         
                                                                     
        ]},
        {title: "Search Results",expanded: true, canCollapse: true,items: [ 
            searchResults
        ]},
        {title: "CaseContent",expanded: true, canCollapse: true, items: [ BodyTabSet
        ]}
    ]
});

