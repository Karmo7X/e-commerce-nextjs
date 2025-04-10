import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { routes } from '@/app/config/routes'

interface Breadcurmb {
   title:string;
   href:string;
}

interface BreadcurmbProps {
    breadcurmb:Breadcurmb[];
}

const Breadcurmb = ({breadcurmb}:BreadcurmbProps) => {
  return (
    <>
     <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcurmb.map((item, index) => (
            <React.Fragment key={item.title}>
              <Link 
                href={item.href} 
                className="flex items-center gap-1 hover:text-gray-900 transition-colors duration-200"
              >
                <span>{item.title}</span>
                {index < breadcurmb.length - 1 && <ArrowRight className="h-3 w-3" />}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Breadcurmb