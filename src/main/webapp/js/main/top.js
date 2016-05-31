isc.VLayout.create({
    ID: "topLayout",
    height: "30%",
    showResizeBar: true,
    border: "1px solid blue"
    , layoutMargin:5,
    members: [
        isc.HTMLFlow.create({
            ID: "textCanvas",
            prefix: "<b>Message from Rob:</b><BR>",
            padding:5,
            height: 1
        }),
        isc.DynamicForm.create({
            numCols: 2,
            height: "*",
            colWidths: [60, "*"],
            fields: [
                {name: "subject",
                    title: "Subject",
                    type: "text",
                    width: "*",
                    defaultValue: "Re: your message"
                },
                {name: "message",
                    type: "text",
                    length: 5000,
                    showTitle: false,
                    colSpan: 2,
                    height: "*",
                    width: "*"
                }
            ]
        })
    ]
});


textCanvas.setContents(textCanvas.prefix+"I'll be in town Saturday.  Give me a call on my cell and we'll check out the new Thai"
    +" restaurant on Polk Street.  Jamie said it's great but too spicy for him, shouldn't be"
    +" a problem for you :)")

;