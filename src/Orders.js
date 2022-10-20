import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
const Orders = ({ List }) => {
  return (
    <div>
      <Header />
      <center>
        {List.length > 0 ? (
          <div className="container mt-4">
            <div className="row">
              {List.map((item) => (
                <div
                  className="col-md-3"
                  style={{ padding: "5px" }}
                  key={item.id}
                >
                  <div className="card" style={{ padding: "3px" }}>
                    <img
                      src={item.url}
                      className="card-img-top"
                      alt="itemimage"
                    />
                    <div className="card-body">
                      <h5 className="card-title"> {item.name}</h5>
                      <div className="card-text">
                        Billing Amount Rs.{item.prize}
                      </div>
                      <p>Table Numeber:{item.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h4 mt-4">No Order Place Yet</div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  List: state.orderreducer,
});

export default connect(mapStateToProps)(Orders);
