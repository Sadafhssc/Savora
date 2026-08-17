import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'

const ListItems = () => {
    const {products,removeProduct}=useContext(AppContext);
    return(
    <>
        {!products.length ? (
        <h3 className="text-center fw-normal my-5">No products</h3>
      ) : (
        <div className="container my-5">

          {/* ================= Cart Table ================= */}
          <table className="table align-middle">
            <thead className="text-secondary">
              <tr>
                <th>Items</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                  </td>

                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}.00</td>

                  <td>
                    <button
                      className="btn-close"
                      onClick={() => removeProduct(item._id)}
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>)}
    </>
            
  )
}

export default ListItems
