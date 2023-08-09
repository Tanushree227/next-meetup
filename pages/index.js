import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title:'Santorini Meetup',
        image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400',
        address: '123, link road, Avenue park, santorini',
        description:'woah... nice meeting at nice location',
    },
    {
        id: 'm2',
        title:'Official Meetup',
        image: 'https://images.pexels.com/photos/4331280/pexels-photo-4331280.jpeg?auto=compress&cs=tinysrgb&w=400',
        address: '123, link road, Avenue park, NYC',
        description: 'OOPS.. got some serious meetings to attend',
    },
    {
        id: 'm3',
        title:'On a Date',
        image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=400',
        address: '123, link road, Avenue park, Paris',
        description:'Guess what I got to meet with my bae, what could be more better location then this.... yayyy',
    },
    {
        id: 'm4',
        title:'Casual Meetup',
        image: 'https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=400',
        address: '123, link road, Avenue park, Las Vegas',
        description: "Finally, gonna live the days of 'What happens in Vegas, remain in Vegas'",
    }
]

function HomePage()
{
    return(
        <MeetupList meetups={DUMMY_MEETUPS} />
    );
}

export default HomePage;