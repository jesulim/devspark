/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dDGItnCjpi3
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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"

export function Cuestionario() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Cuestionario de Desarrollo de Software</CardTitle>
          <CardDescription>Responde 10 preguntas básicas y obtén tu perfil de habilidades.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label htmlFor="q1">¿Cuál es el propósito de los sistemas de control de versiones como Git?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Gestionar los cambios en el código a lo largo del tiempo</SelectItem>
                  <SelectItem value="b">Hacer copias de seguridad del código en caso de pérdida de datos</SelectItem>
                  <SelectItem value="c">Colaborar en el código con un equipo</SelectItem>
                  <SelectItem value="d">Todas las anteriores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q2">¿Cuál es la diferencia entre el desarrollo front-end y back-end?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">
                    El front-end es del lado del cliente, el back-end es del lado del servidor
                  </SelectItem>
                  <SelectItem value="b">El front-end es el diseño, el back-end es la funcionalidad</SelectItem>
                  <SelectItem value="c">El front-end es HTML/CSS, el back-end es JavaScript</SelectItem>
                  <SelectItem value="d">
                    El front-end es la interfaz de usuario, el back-end es el procesamiento de datos
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q3">¿Cuál es el propósito de las pruebas unitarias en el desarrollo de software?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">
                    Asegurar que los componentes individuales funcionen como se esperaba
                  </SelectItem>
                  <SelectItem value="b">Probar toda la aplicación de principio a fin</SelectItem>
                  <SelectItem value="c">Identificar y corregir errores en el código</SelectItem>
                  <SelectItem value="d">Todas las anteriores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q4">¿Cuál es el propósito de un diagrama de arquitectura de software?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Mostrar la estructura y los componentes de un sistema</SelectItem>
                  <SelectItem value="b">Documentar el proceso de toma de decisiones</SelectItem>
                  <SelectItem value="c">Comunicar el sistema a las partes interesadas</SelectItem>
                  <SelectItem value="d">Todas las anteriores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q5">
                ¿Cuál es el propósito de la integración continua (CI) en el desarrollo de software?
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Construir, probar y desplegar automáticamente los cambios de código</SelectItem>
                  <SelectItem value="b">
                    Gestionar las dependencias y versiones de los componentes de software
                  </SelectItem>
                  <SelectItem value="c">Garantizar la calidad del código y detectar problemas temprano</SelectItem>
                  <SelectItem value="d">Todas las anteriores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q6">¿Qué es la programación orientada a objetos?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Un paradigma de programación que se basa en objetos</SelectItem>
                  <SelectItem value="b">Un lenguaje de programación específico</SelectItem>
                  <SelectItem value="c">Una técnica de depuración de código</SelectItem>
                  <SelectItem value="d">Una metodología de diseño de software</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q7">¿Qué es un algoritmo?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Una secuencia de instrucciones para resolver un problema</SelectItem>
                  <SelectItem value="b">Un lenguaje de programación de bajo nivel</SelectItem>
                  <SelectItem value="c">Una estructura de datos compleja</SelectItem>
                  <SelectItem value="d">Una herramienta de depuración de código</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q8">¿Qué es un framework de desarrollo web?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Una biblioteca de código reutilizable</SelectItem>
                  <SelectItem value="b">Un lenguaje de programación específico</SelectItem>
                  <SelectItem value="c">Una herramienta de diseño de interfaces de usuario</SelectItem>
                  <SelectItem value="d">Una estructura predefinida para desarrollar aplicaciones web</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q9">¿Qué es la depuración de código?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">El proceso de encontrar y corregir errores en el código</SelectItem>
                  <SelectItem value="b">La creación de pruebas unitarias para el código</SelectItem>
                  <SelectItem value="c">La optimización del rendimiento del código</SelectItem>
                  <SelectItem value="d">La documentación del código fuente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="q10">¿Qué es la refactorización de código?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Reescribir el código para mejorar su estructura interna</SelectItem>
                  <SelectItem value="b">Agregar nuevas funcionalidades al código existente</SelectItem>
                  <SelectItem value="c">Convertir código de un lenguaje a otro</SelectItem>
                  <SelectItem value="d">Optimizar el rendimiento del código</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Enviar
          </Button>
        </CardContent>
      </Card>
      <div className="mt-8">
        <ChartContainer
          config={{
            softSkills: { label: "Habilidades Blandas", color: "hsl(var(--chart-1))" },
            hardSkills: { label: "Habilidades T\u00E9cnicas", color: "hsl(var(--chart-2))" },
          }}
          className="w-full max-w-md"
        >
          <RadarChart
            data={[
              { skill: "Comunicaci\u00F3n", softSkills: 80, hardSkills: 70 },
              { skill: "Resoluci\u00F3n de Problemas", softSkills: 75, hardSkills: 85 },
              { skill: "Trabajo en Equipo", softSkills: 90, hardSkills: 60 },
              { skill: "Adaptabilidad", softSkills: 85, hardSkills: 75 },
              { skill: "Pensamiento Cr\u00EDtico", softSkills: 80, hardSkills: 80 },
            ]}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <Radar dataKey="softSkills" fill="var(--color-softSkills)" fillOpacity={0.6} />
            <Radar dataKey="hardSkills" fill="var(--color-hardSkills)" fillOpacity={0.6} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  )
}
