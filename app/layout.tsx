import './globals.css';

export const metadata = {
  title: 'EPI·LAB | Epidemiología Enfermería UANDES',
  description: 'Laboratorio interactivo de Epidemiología para estudiantes de Enfermería UANDES',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
