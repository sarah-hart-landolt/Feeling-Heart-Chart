# Feeling Heart

Feeling Heart is an app created for clients of my art who want to customize their own Feeling Heart chart, instead of/ in addition to buying the standard version. In the process, this app helps promote emotional intelligence and a way to your inner world through color and shape instead of language alone.

## Installation

Along with the Feeling Heart repository, you will need to clone the [Feeling-Heart-Chart-API](https://github.com/sarah-hart-landolt/Feeling-Heart-Chart-API) repo as well which contains the data structure.

You will need [json-server](https://www.npmjs.com/package/json-server) installed in order to create the persistant data storage.

To start the json server, run the following command in your terminal inside of the Feeling-Heart-Chart-API directory:

```bash
json-server -p 8090 -w database.json
```
To start the application, run the following command in your terminal inside of the Feeling-Heart-Chart directory:

```bash
npm start
```
## Dummy User Data

To quickly get to the data login with the following dummy user data:

Username: sarah@sarah.com

Password: 1

## Technologies Used

[React](https://reactjs.org/)

[Reactstrap](https://reactstrap.github.io/) for speedy styling

[MDB](https://mdbootstrap.com/docs/react/getting-started/download/) for extra styling

[dbdiagram.io](https://dbdiagram.io/home) for data structure planning

[Sketchboard.me](https://sketchboard.me/home) for easy wireframing


## Other Goodies

[reactstrap-date-picker](https://github.com/afialapis/reactstrap-date-picker) for date pickin' made easy!

### ERD

![entity realtionship diagram](./src/components/images/FeelingHeartERd.png)

## Sarah Hart Art Info

All art is mine. See more at [Sarah Hart Art](https://sarahhartlandolt.com/)
