package backend.poc.first.POC1BackEnd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class APIController {
	@Autowired
	ResourceService Service;
	@PostMapping("/new")
	public String makecreate(@RequestBody Resource res)
	{
		return Service.create(res).getResName()+"has recurited";
	}
	
	

}
