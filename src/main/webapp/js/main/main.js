function printParams(){
		var qs = (function (a) {
            if (a == "")
                return {};
            var b = {};
            for (var i = 0; i < a.length; ++i)
            {
                var p = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'));
		alert("Anum="+qs.anum+" bnum="+qs.bnum);
		
	}
printParams();

isc.HLayout.create({
    width: "100%",
    height: "100%",
    members: [
        crmTree,
        isc.VLayout.create({
            width: "70%",
            members: [
             bodySectionSet,

               
            ]
        })
    ]
});