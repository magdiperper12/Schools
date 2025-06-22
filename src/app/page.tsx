import Announcements from '@/components/Announcements';
import AttendanceChart from '@/components/AttendanceChart';
import BigCalendar from '@/components/BigCalender';
import CountChart from '@/components/CountChart';
import EventCalendar from '@/components/EventCalendar';
import FinanceChart from '@/components/FinanceChart';
import Performance from '@/components/Performance';
import UserCard from '@/components/UserCard';

export default function Homepage() {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-6 gap-2 '>
				<div className='col-span-1 lg:col-span-4  p-2  space-y-4'>
					<div className='grid grid-cols-2 lg:grid-cols-4  gap-2 '>
						<UserCard type='student' />
						<UserCard type='parents' />
						<UserCard type='teachers' />
						<UserCard type='staff' />
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 '>
						<div className='col-span-1 lg:col-span-2'>
							<CountChart />
						</div>
						<div className='col-span-1 lg:col-span-4'>
							<AttendanceChart />
						</div>
					</div>
					<div className='h-[40vh] w-full m-auto'>
						<FinanceChart />
					</div>
				</div>
				<div className='col-span-1 lg:col-span-2   p-2'>
					<EventCalendar />
					<Announcements />
				</div>
			</div>

			<div className='h-screen max-w-5xl m-auto'>
				<BigCalendar />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<Performance />
			</div>
		</div>
	);
}
