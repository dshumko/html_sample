var ServiceNameMap = [
["taco.dev.AVInput", "client", "AVInput"],
["taco.dev.DeviceSetting", "client", "DeviceSetting"],
["taco.dev.ContactBook", "client", "ContactBook"],
["taco.dev.Contact", "client", "Contact"],
["taco.dev.Address", "client", "Address"],
["taco.dev.ContactCollection", "client", "ContactCollection"],
["taco.dev.Live", "server", "Live"],
];

var ServiceManager = (function () {
	function ServiceManager_() {
	}

	var getClassName = function(serviceName) {
		var lastIndex = serviceName.lastIndexOf(".");
		if (lastIndex == -1) {
			return "";
		}
		return serviceName.substring(lastIndex+1);
	}
	var getServerName = function(serviceName) {
		var location = "client";
		for(var index =0; index < ServiceNameMap.length ; index++)
		{
			if(ServiceNameMap[index][0] == serviceName)
				location = ServiceNameMap[index][1];
		}
		if(location == "client")
			return m_client_name;
		else
			return m_server_name;
	}

	ServiceManager_.prototype.isServiceSupported = function(serviceName) {
		var className = getClassName(serviceName);
		var isSupported	= false;

	    try {
			isSupported = (typeof eval(className) != "undefined");
        } catch (e) {
            return false;
        }

		return isSupported;
	}

	ServiceManager_.prototype.getServiceForJavaScript = function(serviceName) {
		var className = getClassName(serviceName);
		var serverName = getServerName(serviceName);
		return eval("new " + className + "(serverName)");
	}
	ServiceManager_.prototype.setServerInfo = function(name, location, ip){
		
		if(location == "client")
		{
				m_client_name = name;
				m_client_ip = ip;
		}
		else
		{
				m_server_name = name;
				m_server_ip = ip;
		}
	}

	ServiceManager_.prototype.connectServer = function(name){
		var ip = m_server_ip+":8085";
		
		if(name == m_client_name)
		{
			ip = m_client_ip+":8083";
		}
		else
		{
			ip = m_server_ip+":8085";
		}
		
			
		 var cc = CobraFactory.getCobraClient(name);
		 if(cc.comm){
    //cc.comm.connect("http://localhost:8083/sync", "ws://localhost:8083/async");
    	cc.comm.connect("http://"+ip+"/sync", "ws://"+ip+"/async");
  	}

	}

	var  m_server_name = "server";
	var  m_client_name ="client";
	var  m_server_ip = "localhost";
	var  m_client_ip = "localhost";
	
	return new ServiceManager_();
})();
