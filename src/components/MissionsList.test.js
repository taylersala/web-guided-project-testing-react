import MissionsList from "./MissionsList";
import React from "react";
import { render, screen, } from '@testing-library/react'

const missions = [
    {
      mission_name: "Thaicom",
      mission_id: "9D1B7E0"
    },
    {
      mission_name: "Telstar",
      mission_id: "F4F83DE"
    }
  ];

  test('misison list shows data when rerendered with new misisons data', () => {
    const { rerender } = render(<MissionsList errors="" missions={{}} /> )
    let missionsObject = screen.queryAllByTestId('mission');
    expect(missionsObject).toHaveLength(0);

    rerender(<MissionsList errors="" missions={{}} /> )
    missionsObject = screen.queryAllByTestId('mission')
    expect(missionsObject).toHaveLength(2);
  });