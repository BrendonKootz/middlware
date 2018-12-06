const gatekeeper = (req,res,next) => {
	const pass = req.query.pass;
	if(pass === "password"){
		next();
	} else {
		res.status(400).json({message:"Invalid Password"});
	}
};

const uppercase = (req,res,next) => {
	const name = req.body.name;
	if(name){
		req.body.name = name.toUpperCase();
	}
	next();
};

module.exports = {
	gatekeeper : gatekeeper,
	uppercase : upperacse
}	
