return (
  <div key={index} className="col-12 col-md-6 col-lg-3">
    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
      <img
        src={item.img}
        className="card-img-top"
        alt="..."
        style={{ height: "120px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="container px-0">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <span className="fw-bold">Qty:</span> {item.qty}
              </div>
              <div className="mb-2">
                <span className="fw-bold">Size:</span> {item.size}
              </div>
              <div className="mb-2">
                <span className="fw-bold">Data:</span> {item.data}
              </div>
              <div>
                <span className="fw-bold">Price:</span> ₹{item.price}/-
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

{
  /* <div
                            className="container w-100 p-0"
                            style={{ height: "38px" }}
                          >
                            {item.map((subItem, subIndex) => (
                              <React.Fragment key={subIndex}>
                                <span className="m-1">{subItem.name}</span>
                                <span className="m-1">{subItem.qty}</span>
                                <span className="m-1">{subItem.size}</span>
                                <span className="m-1">{subItem.data}</span>
                                <div className="d-inline ms-2 h-100 w-20 fs-5">
                                  ₹{subItem.price}/-
                                </div>
                              </React.Fragment>
                            ))}
                          </div> */
}

// return (
//     <div key={index} className="col-12 col-md-6 col-lg-3">
//       <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//         <img
//           src={item.img}
//           className="card-img-top"
//           alt="..."
//           style={{ height: "120px", objectFit: "fill" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{item.name}</h5>
//           <div className="container px-0">
//             <div className="row">
//               <div className="col-12">
//                 <div className="mb-2">
//                   <span className="fw-bold">Qty:</span> {item.qty}
//                 </div>
//                 <div className="mb-2">
//                   <span className="fw-bold">Size:</span> {item.size}
//                 </div>
//                 <div className="mb-2">
//                   <span className="fw-bold">Data:</span> {item.data}
//                 </div>
//                 <div>
//                   <span className="fw-bold">Price:</span> ₹{item.price}/-
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
