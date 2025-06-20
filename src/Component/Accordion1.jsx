// // import Accordion from "@mui/material/Accordion";
// // import AccordionSummary from "@mui/material/AccordionSummary";
// // import AccordionDetails from "@mui/material/AccordionDetails";
// // import Typography from "@mui/material/Typography";
// // import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // import AddIcon from "@mui/icons-material/Add";
// // import RemoveIcon from "@mui/icons-material/Remove";
// // import { useState } from "react";

// // export default function Accordion1() {
// //   const [expanded, setExpanded] = useState(false);

// //   const handleChange = (isExpanded) => {
// //     setExpanded(isExpanded);
// //   };

// //   return (
// //     <div className="mt-20 rounded-none">
// //       <Accordion expanded={expanded} onChange={handleChange}>
// //         <AccordionSummary
// //           expandIcon={
// //             expanded ? <RemoveIcon className="text-redwala" /> : <AddIcon />
// //           }
// //           aria-controls="panel1-content"
// //           id="panel1-header"
// //         >
// //           <Typography component="span">
// //             <h1 className="text-xl font-bold">
// //               1. Do we need to pay a security deposit?
// //             </h1>
// //           </Typography>
// //         </AccordionSummary>
// //         <AccordionDetails>
// //           <p className="text-lg text-gray-400">
// //             No, we do not require any security deposit. Rental payments are to
// //             be made on a prepaid basis, due on the 2nd of every month.
// //           </p>
// //         </AccordionDetails>
// //       </Accordion>
// //       <Accordion className="mt-3">
// //         <AccordionSummary
// //           expandIcon={<AddIcon />}
// //           aria-controls="panel2-content"
// //           id="panel2-header"
// //         >
// //           <Typography component="span">
// //             <h1 className="text-xl font-bold">
// //               2.Are there any ongoing offers?
// //             </h1>
// //           </Typography>
// //         </AccordionSummary>
// //         <AccordionDetails className="text-lg text-gray-400">
// //           Yes, we have different offers depending on the launch date and time.
// //           Currently, we’re offering a 20% discount for the first 10 seats at our
// //           center.
// //         </AccordionDetails>
// //       </Accordion>
// //       <Accordion className="mt-3">
// //         <AccordionSummary
// //           expandIcon={<AddIcon />}
// //           aria-controls="panel2-content"
// //           id="panel2-header"
// //         >
// //           <Typography component="span">
// //             <h1 className="text-xl font-bold">
// //               3.Will I need to pay for electricity, water, or housekeeping?
// //             </h1>
// //           </Typography>
// //         </AccordionSummary>
// //         <AccordionDetails className="text-lg text-gray-400">
// //           No, for workstations, there are no additional charges for electricity,
// //           water, or housekeeping. For private cabins, only the electricity bill
// //           for AC usage will apply. Note: All charges are transparent, and there
// //           are no hidden fees—everything is clearly stated in your rental
// //           agreement.
// //         </AccordionDetails>
// //       </Accordion>
// //       <Accordion className="mt-3">
// //         <AccordionSummary
// //           expandIcon={<AddIcon />}
// //           aria-controls="panel2-content"
// //           id="panel2-header"
// //         >
// //           <Typography component="span">
// //             <h1 className="text-xl font-bold">
// //               4.How many cups of coffee and tea can I have?
// //             </h1>
// //           </Typography>
// //         </AccordionSummary>
// //         <AccordionDetails className="text-lg text-gray-400">
// //           Unlimited coffee and tea! Enjoy as much hot coffee and tea as you like
// //           while you work—absolutely free.
// //         </AccordionDetails>
// //       </Accordion>
// //       <Accordion className="mt-3">
// //         <AccordionSummary
// //           expandIcon={<AddIcon />}
// //           collapsedIcon={<RemoveIcon />}
// //           aria-controls="panel2-content"
// //           id="panel2-header"
// //         >
// //           <Typography component="span">
// //             <h1 className="text-xl font-bold">5.Do you have parking space?</h1>
// //           </Typography>
// //         </AccordionSummary>
// //         <AccordionDetails className="text-lg text-gray-400">
// //           Yes, ample parking space is available both within the premises and
// //           nearby for your two-wheelers and four-wheelers.
// //         </AccordionDetails>
// //       </Accordion>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// export default function Accordion1() {
//   const [expanded, setExpanded] = useState("panel1");

//   const handleChange = (panel) => (event, isExpanded) => {
//     // Only allow toggle if closing OR nothing is open
//     setExpanded(isExpanded ? panel : null); // close current
//   };

//   const accordions = [
//     {
//       id: "panel1",
//       title: "1. Do we need to pay a security deposit?",
//       content:
//         "No, we do not require any security deposit. Rental payments are to be made on a prepaid basis, due on the 2nd of every month.",
//     },
//     {
//       id: "panel2",
//       title: "2. Are there any ongoing offers?",
//       content:
//         "Yes, we have different offers depending on the launch date and time. Currently, we’re offering a 20% discount for the first 10 seats at our center.",
//     },
//     {
//       id: "panel3",
//       title: "3. Will I need to pay for electricity, water, or housekeeping?",
//       content:
//         "No, for workstations, there are no additional charges for electricity, water, or housekeeping. For private cabins, only the electricity bill for AC usage will apply. Note: All charges are transparent, and there are no hidden fees—everything is clearly stated in your rental agreement.",
//     },
//     {
//       id: "panel4",
//       title: "4. How many cups of coffee and tea can I have?",
//       content:
//         "Unlimited coffee and tea! Enjoy as much hot coffee and tea as you like while you work—absolutely free.",
//     },
//     {
//       id: "panel5",
//       title: "5. Do you have parking space?",
//       content:
//         "Yes, ample parking space is available both within the premises and nearby for your two-wheelers and four-wheelers.",
//     },
//   ];

//   return (
//     <div className="mt-10 rounded-none">
//       {accordions.map((item) => (
//         <Accordion
//           className="mt-2 p-2 rounded-none"
//           key={item.id}
//           expanded={expanded === item.id}
//           onChange={handleChange(item.id)}
//         >
//           <AccordionSummary
//             expandIcon={
//               expanded === item.id ? (
//                 <RemoveIcon className="text-redwala" />
//               ) : (
//                 <AddIcon />
//               )
//             }
//           >
//             <Typography>
//               <h1 className="text-xl font-bold">{item.title}</h1>
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography className="text-lg text-gray-400">
//               {item.content}
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Accordion1() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    // Only allow switch to another panel, prevent collapsing current
    if (expanded !== panel) {
      setExpanded(panel);
    }
  };

  const accordions = [
    {
      id: "panel1",
      title: "1.Do we need to pay a security deposit?",
      content:
        "No, we do not require any security deposit. Rental payments are to be made on a prepaid basis, due on the 2nd of every month.",
    },
    {
      id: "panel2",
      title: "2. Are there any ongoing offers?",
      content:
        "Yes, we have different offers depending on the launch date and time. Currently, we’re offering a 20% discount for the first 10 seats at our center.",
    },
    {
      id: "panel3",
      title: "3.Will I need to pay for electricity, water, or housekeeping?",
      content:
        "No, for workstations, there are no additional charges for electricity, water, or housekeeping. For private cabins, only the electricity bill for AC usage will apply. Note: All charges are transparent, and there are no hidden fees—everything is clearly stated in your rental agreement.",
    },
    {
      id: "panel4",
      title: "4.How many cups of coffee and tea can I have?",
      content:
        "Unlimited coffee and tea! Enjoy as much hot coffee and tea as you like while you work—absolutely free.",
    },
    {
      id: "panel5",
      title: "5.Do you have parking space?",
      content:
        "Yes, ample parking space is available both within the premises and nearby for your two-wheelers and four-wheelers.",
    },
  ];

  return (
    <div>
      {accordions.map((item, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <motion.div
            ref={ref}
            key={item.id}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="w-full mt-2"
          >
            <Accordion
              className="mt-2 p-2 rounded-none"
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary
                expandIcon={
                  expanded === item.id ? (
                    <RemoveIcon className="text-red-500" />
                  ) : (
                    <AddIcon />
                  )
                }
              >
                <Typography>
                  <h1 className="text-lg font-bold">{item.title}</h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-600">
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        );
      })}
    </div>
  );
}
