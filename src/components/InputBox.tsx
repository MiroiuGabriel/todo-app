import React from 'react';
import './css/inputbox.css';
import clsx from 'clsx';

type Props = {
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	hasError: boolean;
};

const InputBox: React.FC<Props> = ({ label, value, onChange, hasError }) => {
	const css = clsx('title-input input', hasError && 'required');
	return (
		<div className={css}>
			<label htmlFor={label} className="label-box">
				{label}
			</label>
			<input id={label} type="text" className="text-box" value={value} onChange={onChange} />
		</div>
	);
};

export default InputBox;
