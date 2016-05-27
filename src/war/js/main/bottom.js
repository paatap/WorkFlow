isc.DynamicForm.create({
    ID: "exampleForm",
    height: "70%",
    border: "1px solid blue",
    fields: [
        {name: "username",
            title: "Username",
            type: "text",
            required: true,
            defaultValue: "bob"
        },
        {name: "email",
            title: "Email",
            required: true,
            type: "text",
            defaultValue: "bob@isomorphic.com"
        },
        {name: "password",
            title: "Password",
            required: true,
            type: "password"
        },
        {name: "password2",
            required: true,
            title: "Password again",
            type: "password",
            wrapTitle: false
        }
    ]
});