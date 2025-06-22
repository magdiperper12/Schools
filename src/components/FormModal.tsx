'use client';

import Image from 'next/image';
import { useState } from 'react';

// النماذج المتوفرة فقط:
import TeacherForm from './forms/TeacherForm';
import StudentForm from './forms/StudentForm';

// مابيّن المكوّنات المتاحة
const forms: Record<
	string,
	(type: 'create' | 'update', data?: any) => JSX.Element
> = {
	teacher: (type, data) => (
		<TeacherForm
			type={type}
			data={data}
		/>
	),
	student: (type, data) => (
		<StudentForm
			type={type}
			data={data}
		/>
	),
};

type AvailableTable = keyof typeof forms; // سيكون فقط "teacher" | "student"

type FormModalProps = {
	table: AvailableTable | string; // ممكن تعديله إلى AvailableTable فقط إذا كنت تريد قصره على هذين فقط
	type: 'create' | 'update' | 'delete';
	data?: any;
	id?: number;
};

const FormModal = ({ table, type, data, id }: FormModalProps) => {
	const [open, setOpen] = useState(false);

	const size = type === 'create' ? 'w-8 h-8' : 'w-7 h-7';
	const bgColor =
		type === 'create'
			? 'bg-lamaYellow'
			: type === 'update'
			? 'bg-lamaSky'
			: 'bg-lamaPurple';

	const FormContent = () => {
		// إذا كان نوع الفورم delete
		if (type === 'delete' && id) {
			return (
				<form className='p-4 flex flex-col gap-4'>
					<span className='text-center font-medium'>
						All data will be lost. Are you sure you want to delete this {table}?
					</span>
					<button className='bg-red-700 text-white py-2 px-4 rounded-md w-max self-center'>
						Delete
					</button>
				</form>
			);
		}

		// إذا كان نوع الفورم create أو update
		if (type === 'create' || type === 'update') {
			const SelectedForm = forms[table]; // ممكن يكون undefined إذا table مش موجود
			return SelectedForm ? (
				SelectedForm(type, data)
			) : (
				<p className='text-center text-red-500'>
					No form available for "{table}"
				</p>
			);
		}

		// نوع غير معروف
		return <p>Form not found!</p>;
	};

	return (
		<>
			<button
				className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
				onClick={() => setOpen(true)}>
				<Image
					src={`/${type}.png`}
					alt={type}
					width={16}
					height={16}
				/>
			</button>

			{open && (
				<div className='w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'>
					<div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
						<FormContent />

						<button
							className='absolute top-4 right-4 cursor-pointer'
							onClick={() => setOpen(false)}>
							<Image
								src='/close.png'
								alt='close'
								width={14}
								height={14}
							/>
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default FormModal;
