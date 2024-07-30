abstract class formatTextABC{
	constructor(protected text: string) {
		this.text = text;
	}

	public abstract format(): string;
}


class formatText extends formatTextABC{
	public format(): string {
        return this.text.trim();
    };
}

export default formatText;