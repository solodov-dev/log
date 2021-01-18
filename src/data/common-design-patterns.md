---
date: '2021-01-18'
title: Common software design patterns
tags: [design, software, architecture, code complete]
---

| Pattern           | Description                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Absctract Factory | Supports creation of sets of related objects by specifying the kind of set but not the kinds of each specific object                                                                  |
| Adapter           | Converts the interface of a class to a different interface                                                                                                                            |
| Bridge            | Builds an interface and an implementation in such a way that either can vary without the other varying                                                                                |
| Composite         | Consists of an object that contains additional objects of its own type to that client code can interact with the top-level object and not concern itsef with all the detailed objects |
| Decorator         | Attaches responsibilities to an object dynamically, without creating specific subclasses for each possible configuration of responsibilities                                          |
| Facade            | Provides a consistent interface to code that wouldn't otherwise offer a consistent interface                                                                                          |
| Factory Method    | Instantiates classes derived from a specific base class without needing to keep track of the individual derived classes anywhere but the Factory Method                               |
| Iterator          | A server object that provides access to each element in a set sequentially                                                                                                            |
| Observer          | Keeps multiple object in synch with one another by making an object responsible for notifying the set of related objects about changes to any member of the set                       |
| Singleton         | Provides global access to a class that has one and only on instance                                                                                                                   |
| Strategy          | Defines a set of algorithms of behaviors that are dynamically interchangeable with each other                                                                                         |
| Template Method   | Defines the structure of an algorithm but leaves some of the detailed implementation to sublclasses                                                                                   |
