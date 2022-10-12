import { Envelope, Lock } from 'phosphor-react'
import { Button } from './Components/Button'
import { Checkbox } from './Components/Checkbox'
import { Heading } from './Components/Heading'
import { Text } from './Components/Text'
import { TextInput } from './Components/TextInput'
import './styles/global.css'

export function App() {
  return (
    <main className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center">
      <header className='text-center'>
        <Heading size='lg'>
          Ignite Lab
        </Heading>
        <Text asChild size='lg'>
          <p className='text-gray-400'>
            Faça login e comece a usar
          </p>
        </Text>
      </header>
      <section id="form" className='w-[480px] min-h-fit mt-8'>
        <form name='login' className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <Text>
              Endereço de Email
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>
              <TextInput.Input placeholder='Email'/>
            </TextInput.Root>
          </div>
          <div className='flex flex-col gap-3'>
            <Text>
              Sua Senha
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>
              <TextInput.Input placeholder='Senha'/>
            </TextInput.Root>
          </div>
          <div className='flex gap-2 text-gray-200'>
            <Checkbox></Checkbox>
            <span>
              Lembre de mim durante 30 dias
            </span>
          </div>
        </form>
        <div className='mt-8'>
          <Button>
            Fazer Login
          </Button>
        </div>
        <div className='flex flex-col items-center gap-4 text-center mt-8'>
          <Text asChild>
            <a href="" className='text-gray-400 underline max-w-fit custom-focus'>
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild>
            <a href="" className='text-gray-400 underline max-w-fit'>
              Não possui uma conta? Crie uma agora!
            </a>
          </Text>
        </div>
      </section>
    </main>
  )
}
