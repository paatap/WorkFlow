isc.HLayout.create({
    width: "100%",
    height: "100%",
    members: [
        employeeTree,
        isc.VLayout.create({
            width: "70%",
            members: [
                topLayout,
                exampleForm
            ]
        })
    ]
});