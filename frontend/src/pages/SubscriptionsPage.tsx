import SubscriptionCard from '../components/SubscriptionCard'
import SubscriptionForm from '../components/SubscriptionForm'

const SubscriptionsPage = () => {
  return (
    <main className='overflow-y-auto font-lexand px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10'>
      <div className="flex flex-col max-w-screen-xl w-full gap-12">
      <section className="flex flex-col gap-8 items-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight text-center">
          Choose Your <span className="text-custom-orange">Perfect Plan</span>
        </h1>
        <p className="text-gray-400 text-lg text-center max-w-2xl">Flexible options to fit your fitness journey. All plans include access to our state-of-the-art facilities and supportive community.</p>
        <div className="subs_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <SubscriptionCard subDuration='Montly' price={49} perks={['Access to all gym facilities', 'Group fitness class', 'Locker room access']}/>
          <SubscriptionCard subDuration='Quarterly' price={129} isMostPopular={true} perks={['Access to all gym facilities', 'Group fitness class', 'Locker room access', 'One personal training session']} />
          <SubscriptionCard subDuration='Annual' price={399} perks={['Access to all gym facilities', 'Group fitness class', 'Locker room access', 'Four personal training sessions', 'Acces to exclusive member events']} />
        </div>
      </section>
      <section className="mx-auto py-12">
        <SubscriptionForm/>
      </section>
      </div>     
    </main>
  )
}

export default SubscriptionsPage