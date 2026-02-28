import { Bar, Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // ✅ Importación correcta del plugin Filler
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // ✅ Registro correcto del plugin Filler
);

export default function Content() {
  const ventasPorMes = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Libros vendidos',
        data: [120, 150, 180, 90, 200, 170],
        backgroundColor: '#0d6efd',
      },
    ],
  };

  const ventasPorSemana = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Ventas',
        data: [40, 55, 60, 45],
        borderColor: '#6610f2',
        backgroundColor: 'rgba(102, 16, 242, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const votosPorLibro = {
    labels: ['Libro A', 'Libro B', 'Libro C', 'Libro D'],
    datasets: [
      {
        label: 'Votos',
        data: [75, 120, 95, 60],
        backgroundColor: '#20c997',
      },
    ],
  };

  const resumen = [
    {
      icon: 'fas fa-book-open',
      title: 'Ventas Totales',
      count: '1,200',
      color: 'primary',
    },
    {
      icon: 'fas fa-users',
      title: 'Usuarios',
      count: '350',
      color: 'success',
    },
    {
      icon: 'fas fa-book',
      title: 'Libros',
      count: '80',
      color: 'info',
    },
    {
      icon: 'fas fa-comment-dots',
      title: 'Reseñas',
      count: '120',
      color: 'warning',
    },
    {
      icon: 'fas fa-star',
      title: 'Votos Totales',
      count: '350',
      color: 'secondary',
    },
  ];

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content" className="container-fluid">
        <h1 className="h3 mb-4 text-dark fw-bold">📊 Dashboard General</h1>

        {/* Tarjetas de resumen */}
        <div className="row mb-4">
          {resumen.map((item, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className={`card border-start border-${item.color} shadow h-100`}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center mb-2">
                    <i className={`${item.icon} fa-2x text-${item.color} me-3`}></i>
                    <div>
                      <div className={`text-xs fw-bold text-${item.color} text-uppercase mb-1`}>
                        {item.title}
                      </div>
                      <div className="h5 fw-bold text-dark">{item.count}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gráficas */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-primary text-white">
                <h6 className="m-0 fw-semibold">📘 Libros más vendidos por mes</h6>
              </div>
              <div className="card-body">
                <Bar data={ventasPorMes} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-info text-white">
                <h6 className="m-0 fw-semibold">📈 Ventas por semana</h6>
              </div>
              <div className="card-body">
                <Line data={ventasPorSemana} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-success text-white">
                <h6 className="m-0 fw-semibold">⭐ Votos por libro</h6>
              </div>
              <div className="card-body">
                <Bar data={votosPorLibro} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
