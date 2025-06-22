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
			<div className='h-screen max-w-5xl m-auto'>
				<AttendanceChart />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<Announcements />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<BigCalendar />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<CountChart />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<Performance />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<UserCard type='student' />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<EventCalendar />
			</div>
			<div className='h-screen max-w-5xl m-auto'>
				<FinanceChart />
			</div>
		</div>
	);
}
