import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function QuesSection() {

  const data = [
    {
        "ques" : "Do you offer freelancers?",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut!"
    },
    {
        "ques" : "What’s the guarantee that I will be satisfied with the hired talent?" ,
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut!"
    },
    {
        "ques" : "Can I hire multiple talents at once?" ,
        "content" : "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.!"
    },
    {
        "ques" : "Why should I not go to an agency directly?" ,
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut!"
    }
  ]

  return (
    <div className="lg:mt-[6rem] mt-[-2rem] px-4">
    <div className="mx-auto w-full max-w-lg divide-y divide-black/5">
      {data.map((item, index) => (
        <div key={index}>
          <Disclosure as="div" className="p-6" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm font-medium text-black group-data-[hover]:text-black/80">
                {item.ques}
              </span>
              <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
              {item.content}
            </DisclosurePanel>
          </Disclosure>
          <hr className='mt-[-1rem]' />
        </div>
      ))}
    </div>
  </div>
);
};