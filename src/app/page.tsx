
import React, { useState, useEffect } from 'react';
import api from '@/api';
import LinkItem from '../components/link-item.component';
import Navbar from '../components/navbard.component';



export default async function Home() {
 const links = await api.links.fetch()

  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 py-8 mt-10  justify-center items-center h-screen'>
        <div className='w-full'>
          <h1 className='text-3xl font-bold mb-2 text-center'>
            Augusto Poletti
          </h1>
          <h2 className='text-xl font-semibold mb-4 text-center'>Projects</h2>
          <div className='lg:w-1/3 md:w-1/2 sm:w-auto mx-auto'>
            <ul>
              {links.map((link, index) => (
              <LinkItem key={index} link={link} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
