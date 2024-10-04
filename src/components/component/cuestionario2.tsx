/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hR7vlBeXTYg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Cuestionario2() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Cuestionario para Desarrolladores</h1>
        <p className="text-muted-foreground">Responde estas 10 preguntas básicas para evaluar tus conocimientos.</p>
      </div>
      <form className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">1. ¿Cuál es el lenguaje de programación más popular?</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q1-a1" />
              <Label htmlFor="q1-a1">Python</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q1-a2" />
              <Label htmlFor="q1-a2">Java</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q1-a3" />
              <Label htmlFor="q1-a3">JavaScript</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q1-a4" />
              <Label htmlFor="q1-a4">C++</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">2. ¿Cuál es el framework de JavaScript más popular?</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q2-a1" />
              <Label htmlFor="q2-a1">Angular</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q2-a2" />
              <Label htmlFor="q2-a2">React</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q2-a3" />
              <Label htmlFor="q2-a3">Vue.js</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q2-a4" />
              <Label htmlFor="q2-a4">Ember</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">3. ¿Cuál es el propósito principal de Git?</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q3-a1" />
              <Label htmlFor="q3-a1">Gestionar bases de datos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q3-a2" />
              <Label htmlFor="q3-a2">Crear aplicaciones web</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q3-a3" />
              <Label htmlFor="q3-a3">Control de versiones</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q3-a4" />
              <Label htmlFor="q3-a4">Automatizar tareas</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">4. ¿Cuál es la diferencia entre HTML, CSS y JavaScript?</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q4-a1" />
              <Label htmlFor="q4-a1">
                HTML es para estructura, CSS es para diseño y JavaScript es para interactividad
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q4-a2" />
              <Label htmlFor="q4-a2">
                HTML es para diseño, CSS es para estructura y JavaScript es para interactividad
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q4-a3" />
              <Label htmlFor="q4-a3">
                HTML es para interactividad, CSS es para estructura y JavaScript es para diseño
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q4-a4" />
              <Label htmlFor="q4-a4">HTML, CSS y JavaScript son lo mismo y se utilizan indistintamente</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            5. ¿Cuál es la diferencia entre una variable y una constante en programación?
          </h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q5-a1" />
              <Label htmlFor="q5-a1">Las variables pueden cambiar de valor, mientras que las constantes no</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q5-a2" />
              <Label htmlFor="q5-a2">Las variables se declaran con "var" y las constantes con "const"</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q5-a3" />
              <Label htmlFor="q5-a3">
                Las variables se utilizan para almacenar datos temporales, mientras que las constantes se utilizan para
                almacenar datos permanentes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q5-a4" />
              <Label htmlFor="q5-a4">Todas las anteriores son correctas</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">6. ¿Cuál es la diferencia entre un array y un objeto en JavaScript?</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q6-a1" />
              <Label htmlFor="q6-a1">
                Los arrays son para almacenar datos ordenados, mientras que los objetos son para almacenar datos con
                clave-valor
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q6-a2" />
              <Label htmlFor="q6-a2">Los arrays se declaran con corchetes [] y los objetos con llaves </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q6-a3" />
              <Label htmlFor="q6-a3">
                Los arrays se utilizan para almacenar datos homogéneos, mientras que los objetos se utilizan para
                almacenar datos heterogéneos
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q6-a4" />
              <Label htmlFor="q6-a4">Todas las anteriores son correctas</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            7. ¿Cuál es la diferencia entre una función declarativa y una función de expresión en JavaScript?
          </h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q7-a1" />
              <Label htmlFor="q7-a1">
                Las funciones declarativas se definen con la palabra clave "function", mientras que las funciones de
                expresión se asignan a una variable
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q7-a2" />
              <Label htmlFor="q7-a2">
                Las funciones declarativas se pueden llamar antes de ser definidas, mientras que las funciones de
                expresión no
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q7-a3" />
              <Label htmlFor="q7-a3">
                Las funciones declarativas se utilizan para tareas más complejas, mientras que las funciones de
                expresión se utilizan para tareas más simples
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q7-a4" />
              <Label htmlFor="q7-a4">Todas las anteriores son correctas</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            8. ¿Cuál es la diferencia entre un callback y una promesa en JavaScript?
          </h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q8-a1" />
              <Label htmlFor="q8-a1">
                Los callbacks son funciones que se pasan como argumentos a otras funciones, mientras que las promesas
                son objetos que representan el resultado eventual de una operación asincrónica
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q8-a2" />
              <Label htmlFor="q8-a2">
                Los callbacks se utilizan para manejar operaciones sincrónicas, mientras que las promesas se utilizan
                para manejar operaciones asincrónicas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q8-a3" />
              <Label htmlFor="q8-a3">
                Los callbacks son más fáciles de manejar que las promesas, por lo que se prefieren en la mayoría de los
                casos
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q8-a4" />
              <Label htmlFor="q8-a1">Todas las anteriores son correctas</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            9. ¿Cuál es la diferencia entre una clase y un objeto en programación orientada a objetos?
          </h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q9-a1" />
              <Label htmlFor="q9-a1">
                Las clases son plantillas o moldes para crear objetos, mientras que los objetos son instancias concretas
                de esas clases
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q9-a2" />
              <Label htmlFor="q9-a2">
                Las clases se definen con la palabra clave "class", mientras que los objetos se crean con la palabra
                clave "new"
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q9-a3" />
              <Label htmlFor="q9-a3">
                Las clases se utilizan para definir el comportamiento y las propiedades de los objetos, mientras que los
                objetos son los elementos concretos que se crean a partir de esas clases
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q9-a4" />
              <Label htmlFor="q9-a4">Todas las anteriores son correctas</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">10. ¿Cuál es la diferencia entre una API REST y una API GraphQL?</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="q10-a1" />
              <Label htmlFor="q10-a1">
                Las API REST se basan en endpoints específicos, mientras que las API GraphQL se basan en un único
                endpoint que permite consultar y modificar datos de forma más flexible
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q10-a2" />
              <Label htmlFor="q10-a2">
                Las API REST utilizan verbos HTTP como GET, POST, PUT y DELETE, mientras que las API GraphQL utilizan
                una única operación de consulta
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q10-a3" />
              <Label htmlFor="q10-a3">
                Las API REST devuelven datos en formatos como JSON o XML, mientras que las API GraphQL devuelven datos
                en formato JSON
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="q10-a4" />
              <Label htmlFor="q10-a4">Todas las anteriores son correctas</Label>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Button>Enviar</Button>
        </div>
      </form>
    </div>
  )
}
