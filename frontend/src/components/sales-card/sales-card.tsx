import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NotificationButton } from "../notification-button/notification-button";

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

  const handleChangeStart = (date: SalesCardDate) => {
    setDate((ps) => ({ ...ps, ...date }));
  };

  useEffect(() => {
    axios.get("http://localhost:8080/sales").then((res) => {
      console.log(res.data);
    });
  }, [date]);

  // console.log(date.startDate);
  // console.log(date.endDate);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            minDate={date.endDate}
            selected={date.startDate}
            className="dsmeta-form-control"
            onChange={(date) => handleChangeStart({ startDate: date })}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={date.endDate}
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
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
