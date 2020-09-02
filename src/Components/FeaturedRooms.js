import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
  // then we can use this.context
  static contextType = RoomContext;
  render() {
    // get state loading and featuredRooms; rename featuredRooms to rooms
    let { loading, featuredRooms : rooms } = this.context;

    rooms = rooms.map( room => {
      return <Room key={room.id} room={room} /> // pass value of room to Room.js
    })

    return (
      <section className="featured-rooms">
        <Title title="featured-rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}
