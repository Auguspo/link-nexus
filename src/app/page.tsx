
import React from 'react';
import api from '@/api';
import LinkItem from '../components/link-item.component';
import Navbar from '../components/navbard.component';
import { Accordion, AccordionItem } from '@chakra-ui/react';



export default async function Home() {
 const links = await api.links.fetch()

  return (
    <div className='h-screen select-none'>
      <Navbar />
      <main className='container mx-auto px-4 py-8 mt-10  justify-center items-center '>
        <div className='w-full'>
          <h1 className='text-3xl font-bold mb-2 text-center'>
            Augusto Poletti
          </h1>
          <h2 className='text-xl font-semibold mb-4 text-center'>Projects</h2>
          <div className='lg:w-1/3 md:w-1/2 sm:w-auto mx-auto'>
            <ul>
              <Accordion >
              {links.map((link, index) => (<AccordionItem key={index} className="shadow rounded-md  overflow-hidden mb-4 bg-gray-100">
              <LinkItem key={index} link={link} /></AccordionItem>
              ))}
              </Accordion>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
