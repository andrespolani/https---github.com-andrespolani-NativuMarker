import React from 'react'

// Reseña completa sobre el café colombiano
// Componente React (Tailwind CSS). Copia y pega en tu proyecto (por ejemplo: src/components/ResenaCafeColombiano.jsx)

export default function ResenaCafeColombiano () {
  const recentHighlights = [
    {
      title: 'Cosecha histórica (2024-2025)',
      text: 'Colombia registró en el periodo 2024–2025 una de sus mayores cosechas en décadas, con aumentos significativos en producción y exportaciones.'
    },
    {
      title: 'Riesgos climáticos y ajustes',
      text: 'A pesar de la cosecha fuerte, expertos y la Federación advierten sobre la posibilidad de una reducción en la cosecha 2025–2026 debido a ciclos fisiológicos del cafeto y condiciones climáticas adversas.'
    },
    {
      title: 'Fuerte demanda de cafés especiales',
      text: 'El segmento de cafés especiales y trazables ha venido creciendo y genera mayores márgenes para los productores.'
    }
  ]

  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold mb-2">Café colombiano — Reseña completa</h1>
        <p className="text-gray-600">Historia, regiones, procesos, situación actual y novedades recientes.</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">1. Historia breve</h2>
        <p className="text-gray-700 leading-relaxed">
          El cultivo del café llegó a Colombia en el siglo XVIII y se consolidó en el XIX como motor rural y cultural. Durante el siglo XX el café se convirtió en
          pilar de la economía, promovido por instituciones como la Federación Nacional de Cafeteros. El modelo campesino —pequeños y medianos productores—
          marcó la identidad del café colombiano: énfasis en calidad, cosecha manual y procesos tradicionales.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">2. Regiones y terroir</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Colombia no tiene una única zona cafetera: la llamada "Zona Cafetera" incluye departamentos como Antioquia, Caldas, Risaralda y Quindío, pero hay
          regiones de calidad en Huila, Nariño, Cauca, Santander, Tolima y más. Cada región aporta altitud, microclima y perfiles de taza distintos.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Huila:</strong> notas frutales y acidez balanceada.</li>
          <li><strong>Nariño:</strong> cafés de altura con buena acidez y complejidad.</li>
          <li><strong>Antioquia:</strong> gran diversidad de perfiles según altitud.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">3. Variedades y cultivo</h2>
        <p className="text-gray-700 leading-relaxed">
          Las variedades comunes incluyen Caturra, Castillo, Typica y Bourbon, entre otras. En las últimas décadas se promovieron variedades resistentes a
          enfermedades (ej. variedades híbridas) para mitigar la roya y plagas. El cultivo sigue siendo en su mayoría de pequeña escala, con cosecha manual
          y prácticas agroforestales en muchas fincas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">4. Procesos (de la finca a la taza)</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li><strong>Cosecha y selección:</strong> recolección por cosecha selectiva (sólo frutos maduros).</li>
          <li><strong>Beneficiado:</strong> lavado, honey o natural —cada proceso impacta el perfil de sabor.</li>
          <li><strong>Secado y tueste:</strong> secado en patios o tambos y tueste que define la expresión final.</li>
          <li><strong>Trazabilidad y calidad:</strong> en los cafés especiales se prioriza trazabilidad, lotes por finca y catación profesional.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">5. Presente: economía y mercado</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Colombia continúa entre los principales productores mundiales. El país ha visto en los últimos años un aumento del valor de las exportaciones,
          mayor demanda por cafés especiales y cambios en las dinámicas comerciales internacionales.
        </p>
        <p className="text-gray-700 italic">Puntos clave: precio en origen, demanda de especialidad, y dependencia de familias productoras.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">6. Retos y sostenibilidad</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Los principales retos son el cambio climático, plagas (broca, roya), acceso a financiamiento, renovación de cafetales y preservación de la biodiversidad.
          En respuesta, hay iniciativas de agricultura climáticamente inteligente, certificaciones (Rainforest Alliance, Fair Trade, orgánicas) y programas nacionales
          de renovación varietal y asistencia técnica.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">7. Novedades recientes (resumen)</h2>
        <div className="grid gap-3">
          {recentHighlights.map((h, i) => (
            <article key={i} className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold">{h.title}</h3>
              <p className="text-sm text-gray-700">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">8. Perfil sensorial y cultura del café</h2>
        <p className="text-gray-700 leading-relaxed">
          El café colombiano es reconocido por su balance, acidez brillante y aromas limpios. En la cultura popular el café es parte de la identidad nacional:
          tinto en la calle, cafés de especialidad en las ciudades y celebraciones del trabajo cafetero en los territorios.
        </p>
      </section>

      <footer className="text-sm text-gray-600 border-t pt-4">
        <p className="mb-2">Cómo usar este componente: pégalo en tu proyecto React + Tailwind y úsalo como <code>&lt;ResenaCafeColombiano /&gt;</code>.</p>
        <p>Nota: los "puntos recientes" están escritos para ser fácilmente actualizables. Actualiza el array <code>recentHighlights</code> con datos más actuales o enlaces a fuentes primarias.</p>
      </footer>
    </article>
  )
}
