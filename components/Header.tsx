import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { navbarConfig } from '@/config/Header';
import ThemeSwitch from './TheamSwitch';

const Header = () => {
  return (
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="EventSpark Logo" width={50} height={50} />
              <span className="text-xl font-bold text-foreground">EventSpark</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navbarConfig.navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            
              <Button onClick={() => window.location.href = "/Login"} variant="outline" size="sm">
                Login
              </Button>
              <Button onClick={() => window.location.href = "/Register"} size="sm">Get Started</Button>
          
                    <ThemeSwitch start="top-right" />
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header
