import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../request";
import { NotificationButton } from "../notification-button/notification-button";
import { ToastContainer, toast } from 'react-toastify';

import "./sales-card.css";

interface SalesCardDate {
  startDate?: Date | null;
  endDate?: Date | null;
}

const defaultSalesCardDate: SalesCardDate = {
  startDate: new Date(),
  endDate: new Date(),
};

export const SalesCard = () => {
  const [date, setDate] = useState<SalesCardDate>(defaultSalesCardDate);
  const [sales, setSales] = useState<Sale[]>([]);

  const handleChangeStart = (date: SalesCardDate) => {
    setDate((ps) => ({ ...ps, ...date }));
  };



  useEffect(() => {

    const dateMin = date.startDate?.toISOString().slice(0, 10);
    const dateMax = date.endDate?.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${dateMin}&maxDate=${dateMax}`).then((res) => {
      setSales(res.data.content)
    });
  }, [date]);

  // console.log(date.startDate);
  // console.log(date.endDate);

  const handleToast = () => {
    console.log("yoooo");
    toast("Que vibe indescritível, meoo")
  }

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={date.startDate}
            className="dsmeta-form-control"
            onChange={(date) => handleChangeStart({ startDate: date })}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={date.endDate}
            minDate={date.endDate}
            className="dsmeta-form-control"
            onChange={(date) => handleChangeStart({ endDate: date })}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td className="show992">{sale.id}</td>
                <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                <td>{sale.sellerName}</td>
                <td className="show992">{sale.visited}</td>
                <td className="show992">{sale.deals}</td>
                <td>R$ {sale.amount.toFixed(2)}</td>
                <td>
                  <NotificationButton onClick={handleToast} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
