import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { LayoutWrapper } from './components/layout-wrapper'
import { Input } from './components/ui/input'
import { BubbliciousService } from './services/bubblicious-service'
import { Loader2 } from 'lucide-react'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(100000);
  const [bubbliciousCount, setBubbliciousCount] = useState<number | undefined>(undefined);
  const bubbliciousService = new BubbliciousService();

  async function calculate() {
    setIsLoading(true); 
    
    bubbliciousService.findBubbliciousNumbersUpTo(number)
      .then((count) => {
        setBubbliciousCount(count);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <LayoutWrapper>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <h1>Find your Bubblicious Numbers!</h1>
            <p>You wanted the Bubblicious numbers up to 100,000, click the button and find out!
            </p>
            <Input
              type="number"
              placeholder='Enter a number'
              disabled={true}
              value={number}
              onChange={(e) => { setBubbliciousCount(undefined);setNumber(Number(e.target.value))}}
            />
            <Button 
              disabled={isLoading}
              onClick={() => {calculate()}}>
                { isLoading ? <Loader2 className="animate-spin" /> : "Find Bubblicious Numbers" }
            </Button>
            {bubbliciousCount && (
              <div>
                There are {bubbliciousCount} bubblicious numbers up to {number}!
              </div>
            )}
          </div>
          <footer className='justify-center mt-5'>
          Yes, this could be optimized, but it is a proof of concept. I could have done the calculations on 
            the server side, but I wanted to get this out to you for the application. I also reached out 
            to you in December of 2023 with my java implementation which you can see here: <a className="text-blue-500" href="https://github.com/smaldd14/bubblicious-number">Bubblicious App - Java</a>
            <p>If you'd like to reach me, you can email me at 
              <a className='text-blue-500' href='mailto:devin@hooswhere.tv'>devin@hooswhere.tv</a>.
               I look forward to hearing from you!
            </p>
          </footer>
            
        </LayoutWrapper>
      </div>

    </div>
  )
}

export default App
