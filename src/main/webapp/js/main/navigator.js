isc.TreeGrid.create({
    ID: "crmTree",
    data: isc.Tree.create({
        modelType: "parent",
        nameProperty: "Name",
        idField: "EmployeeId",
        parentIdField: "ReportsTo",
        data: [
            {EmployeeId: "4", ReportsTo: "1", Name: "root"},
            {EmployeeId: "188", ReportsTo: "4", Name: "Incomming Call"},
            {EmployeeId: "189", ReportsTo: "4", Name: "Outgoing Call"},
            {EmployeeId: "190", ReportsTo: "4", Name: "SMS Center "},
            {EmployeeId: "191", ReportsTo: "4", Name: "Customer Database "},
            {EmployeeId: "192", ReportsTo: "4", Name: "User Managment "},
            {EmployeeId: "193", ReportsTo: "4", Name: "System Administration "}
//            {EmployeeId: "265", ReportsTo: "189", Name: "Olivier Doucet"},
//            {EmployeeId: "264", ReportsTo: "189", Name: "Cheryl Pearson"}
        ]
    }),
    width: "15%",
    showResizeBar: true,
    border: "1px solid blue",
    nodeIcon: "icons/16/person.png",
    folderIcon: "icons/16/person.png",
    showOpenIcons: false,
    showDropIcons: false,
    closedIconSuffix: "",
    selectionAppearance: "checkbox",
    showSelectedStyle: false,
    showPartialSelection: true,
    cascadeSelection: true
});

