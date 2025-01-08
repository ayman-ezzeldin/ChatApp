import React from "react";

const GenderCheckbox = ({selectedGender,onCheckboxChange}) => {
	
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? ' ' : ''} `}>
					<span className='label-text'>Male</span>
					<input type='radio' name="gender"
						checked = {selectedGender === 'male'}
						onChange={()=> onCheckboxChange('male')}
						className={`radio border-slate-900`} />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='radio' name="gender"
						checked = {selectedGender === 'female'}
						onChange={()=> onCheckboxChange('female')}
						className={`radio border-slate-900 ${selectedGender === 'female' ? ' radio radio-info ' : ''} `} />
				</label>
			</div>
		</div>
	);
};
export default React.memo(GenderCheckbox);