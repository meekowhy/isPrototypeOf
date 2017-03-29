function isPrototypeOf(prototype, object) {
	var checkPrototype = Object.getPrototypeOf(object);
	if (checkPrototype === null) {
		return false;
	} else if (checkPrototype === prototype) {
		return true;
	} else {
		return isPrototypeOf(prototype, checkPrototype)
	}
}


